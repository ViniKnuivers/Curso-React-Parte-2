import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaStudentMapper } from '@/infra/database/prisma/mappers/prisma-student-mapper'
import type { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import type { Student } from '@/domain/forum/enterprise/entities/student'

@Injectable()
export class PrismaStudentsRepository implements StudentsRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Student | null> {
    const user = await this.prisma.user.findUnique({ where: { email } })

    if (!user) return null

    return PrismaStudentMapper.toDomain(user)
  }

  async create(student: Student): Promise<void> {
    const data = PrismaStudentMapper.toPrisma(student)

    await this.prisma.user.create({ data })
  }
}

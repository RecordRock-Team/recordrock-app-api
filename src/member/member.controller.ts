// import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { MemberService } from './member.service';
import { Controller, Get, /* UseGuards */ } from '@nestjs/common';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  // @UseGuards(JwtAuthGuard)
  @Get('members')
  async getMembers() {
    return this.memberService.findAll();
  }
}

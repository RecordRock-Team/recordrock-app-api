import { MemberService } from './member.service';
import { Controller, Get } from '@nestjs/common';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('members')
  async getMembers() {
    return this.memberService.findAll();
  }
}

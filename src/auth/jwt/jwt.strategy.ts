import { Injectable, /* UnauthorizedException */ } from '@nestjs/common';
import { PassportStrategy} from '@nestjs/passport';
// import { Payload } from './jwt.payload';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Member } from 'src/member/entities/member.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly memberRepository: Repository<Member>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
      ignoreExpiration: false,
    });
  }

  // async validate(payload: Payload) {
  //   const cat = await this.memberRepository.(
  //     payload.sub
  //   );
  //   if (cat) {
  //     return cat;
  //   } else {
  //     throw new UnauthorizedException(); 
  //   }
  // }
}
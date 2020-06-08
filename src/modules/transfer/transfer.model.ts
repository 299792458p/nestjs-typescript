import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class ContactDTO {
    @ApiProperty()
    personInCharge: string;
}

export class AccountDTO {
    @ApiProperty()
    accountId: string;

    @ApiProperty()
    name: string;

    @ApiPropertyOptional()
    contact: ContactDTO;

    @ApiProperty()
    parentAccountId: string;
}

export class ResellerDTO extends AccountDTO {
    @ApiPropertyOptional({ type: String })
    parentAccountId: string;
}

export class OperatorDTO extends AccountDTO {
}

export class PlayerDTO extends AccountDTO {
}
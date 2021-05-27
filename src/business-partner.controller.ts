import { Controller, Get } from '@nestjs/common';

@Controller()
export class BusinessPartnerController {
    @Get('business-partners')
    getBusinessPartners() {
        return 'We will implement this in a minute.';
    }
}

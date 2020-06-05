import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, DNSHealthIndicator, HealthCheck } from '@nestjs/terminus';
import { ApiOperation } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private dns: DNSHealthIndicator,
    ) { }

    @Get()
    @HealthCheck()
    @ApiOperation({ summary: 'Health Check' })
    check() {
        return this.health.check([
            () => this.dns.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
        ]);
    }
}

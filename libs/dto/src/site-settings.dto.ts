import { ApiProperty } from '@nestjs/swagger';

export class SiteSettingsDTO {
  @ApiProperty({ enum: ['image', 'video'], default: 'image', description: 'Hero section type' })
  heroType: string;

  @ApiProperty({ required: false, description: 'Hero image URL' })
  heroImage?: string;

  @ApiProperty({ required: false, description: 'Hero video URL' })
  heroVideo?: string;
}

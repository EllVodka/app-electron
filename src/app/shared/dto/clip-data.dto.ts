import { ClipDto } from "./clip.dto"

export interface ClipDataDto {
    data: ClipDto[]
    pagination: {
        cursor: string
      }
}
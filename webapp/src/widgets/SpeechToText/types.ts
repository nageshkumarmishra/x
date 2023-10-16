export interface DeepgramWord {
  word: string
  start: number
  end: number
  confidence: number
}

export interface DeepgramTranscript {
  transcript: string
  confidence: number
  words: DeepgramWord[]
}

export interface DeepgramResponse {
  type: 'Results'
  start: number
  speech_final: boolean
  is_final: boolean
  duration: number
  channel_index: number[]
  channel: {
    alternatives: DeepgramTranscript[]
  }
  metadata: {
    request_id: string
    model_uuid: string
    model_info: {
      name: string
      arch: string
      version: string
    }
  }
}
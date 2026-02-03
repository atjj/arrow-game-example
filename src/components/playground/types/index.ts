export interface IPlaygroundStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsState[]
  totalSuccessful: number
  totalUnsuccessful: number
}

export interface IMapArrowCodes {
  ArrowUp: string
  ArrowDown: string
  ArrowLeft: string
  ArrowRight: string
}

export interface IEndGameConditions {
  SUCCESS_COUNT: number
  UNSUCCESS_COUNT: number
}

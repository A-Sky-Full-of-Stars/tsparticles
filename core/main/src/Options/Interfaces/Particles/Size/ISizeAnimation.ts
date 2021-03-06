import type { DestroyType, StartValueType } from "../../../../Enums";

/**
 * @category Options
 */
export interface ISizeAnimation {
    /**
     * @deprecated use the new minimumValue instead
     */
    size_min: number;

    destroy: DestroyType | keyof typeof DestroyType;
    enable: boolean;
    minimumValue: number;
    speed: number;
    sync: boolean;
    startValue: StartValueType | keyof typeof StartValueType;
}

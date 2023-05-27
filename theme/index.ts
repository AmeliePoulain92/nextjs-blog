import { bevnetData } from "@newsletter/theme/data/bevnetData";
import { brewboundData } from "@newsletter/theme/data/brewboundData";
import { noshData } from "@newsletter/theme/data/noshData";
import { ThemeData as ThemeDataInterface } from "@newsletter/utils/interfaces";

export const theme: ThemeDataInterface = {
    ...bevnetData,
    ...brewboundData,
    ...noshData
}

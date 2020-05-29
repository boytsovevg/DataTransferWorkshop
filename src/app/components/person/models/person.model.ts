import { GenderType } from '../enums/gender.type';

export interface PersonModel {
    id: string;
    fullName: string;
    age: string;
    gender: GenderType;
}

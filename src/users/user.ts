import { User as UserInterface } from "@polinom-io/px-common-models";

export class User implements UserInterface {
  name: string;
  email: string;
  ssn: string;
}

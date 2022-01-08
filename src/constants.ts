import dotenv from "dotenv";

dotenv.config();

export const RolesCodes = {
    DIRECTOR: 1,
    PRODUCER: 2,
    ACTOR_ACTRESS: 3,
}
export const salt_key = process.env.SALT_KEY??"AAA";
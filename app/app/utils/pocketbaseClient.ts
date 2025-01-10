import PocketBase from "pocketbase";

const pb: PocketBase = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export default pb;
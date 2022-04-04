import { Denops } from "https://deno.land/x/denops_std@v2.4.0/mod.ts";
import { execute } from "https://deno.land/x/denops_std@v2.4.0/helper/mod.ts";
import { Auth } from "./auth.ts";
import {
  ensureArray,
  ensureString,
} from "https://deno.land/x/unknownutil@v1.1.4/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async count(): Promise<unknown> {
    },

    async debug(): Promise<void> {},
  };

  await execute(
    denops,
    `command! -nargs=* -range Debug echomsg denops#request('${denops.name}', 'debug', [])`
  );
}

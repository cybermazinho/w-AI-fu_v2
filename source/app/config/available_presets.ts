import * as fs from "fs";

export function getAllPresets_impl(): string[] {
    const PRESETS_PATH = process.cwd() + "/userdata/config";

    let files = fs.readdirSync(PRESETS_PATH, {
                                            encoding: "utf8",
                                            recursive: false,
                                            withFileTypes: false
                                        });
    let ret_val: string[] = [];                                   
    for (let file of files) {
        if (file.endsWith(".json") === false) continue;
        ret_val.push(file);
    }
    return ret_val;
}
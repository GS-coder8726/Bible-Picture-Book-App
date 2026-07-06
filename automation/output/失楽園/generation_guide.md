# Generation Guide for paradise-lost

## Midjourney (Image Generation)
1. Copy the prompts from `scene_prompts.json`.
2. Ensure you add `--ar 16:9 --v 6.0` to the end of each prompt.
3. For consistency, use the character prompts from `character_prompts.md` as base references if needed.
4. **DO NOT** generate images for God scenes (1-4, 2-1, 5-3, 5-5, 6-4). Use the existing assets from `adam_and_eve` as specified in `app_data.js`.

## Runway/Luma (Video Generation)
1. For scenes listed in `video_prompts.json`, use the generated image as an input.
2. Apply subtle and gentle motion (e.g., leaves rustling, water sparkling, gentle breathing).
3. Do not add heavy camera movement; keep the dreamlike atmosphere.

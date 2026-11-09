export const imgPreview = {
  img1: 'https://cdn.21st.dev/assets/mirror/61/61fba7967229af5763933d0010bb8898322f7caf4ddcec1fdc49631accdf6e8b.jpg',
  img2: 'https://cdn.21st.dev/assets/mirror/a0/a0347946f1279a5e7a11a9a2405813da15fc66c86c629096ce2f26fb12b3ba3c.jpg',
  img3: 'https://cdn.21st.dev/assets/mirror/7d/7d50d54afe86e8a3f5125ed1c1b2620b3908f8292d50929a5cbb4b47eb14ed1e.jpg',
  img4: 'https://cdn.21st.dev/assets/mirror/be/bec6215be6cd082c943700a58fd0b746c4bc609fffa1ef29aebdf541fdaa09e0.jpg',
  img5: 'https://cdn.21st.dev/assets/mirror/61/61fba7967229af5763933d0010bb8898322f7caf4ddcec1fdc49631accdf6e8b.jpg',
  img6: 'https://cdn.21st.dev/assets/mirror/c0/c05c68bbab0df750341e0ae3e45ca956271fe8be03e2edf123f9d9e27f34da9b.jpg',
  img7: 'https://cdn.21st.dev/assets/mirror/e7/e7c75c01704af7934b2c19c8875aad5253a73ff3196152279d82f4228c0938d8.jpg',
  img8: 'https://cdn.21st.dev/assets/mirror/1b/1b29107c1e2de6ee99816c6579659f4580c56da822fabfc510a0e24c714f1680.jpg',
  img9: 'https://cdn.21st.dev/assets/mirror/62/6258a4502bcab2019b7968a8430d40388dca8095e260bd71214e0b58d1174755.jpg',
  img10: 'https://cdn.21st.dev/assets/mirror/d2/d27844e08ea18a79be6997dc69bc2c5413bb0d356d8a7f7e3048adf7469852d9.jpg',
  img11: 'https://cdn.21st.dev/assets/mirror/e2/e230c01d8a7cd574141858578e59e1a5bc4900adfe3b76491fef7946b47f2719.jpg',
  img12: 'https://cdn.21st.dev/assets/mirror/2e/2e28a1c5d4256db396c30431466cd947985b06bdf5139090e1e2dca25d9d3c6f.jpg',
  img13: 'https://cdn.21st.dev/assets/mirror/3b/3b6f800197c801ea0ce8f82f86d2049d2537a9698c4165bf4b40762395046129.jpg',
  img14: 'https://cdn.21st.dev/assets/mirror/92/92512bd8a1f8ef7e2aa3328f1c17bb5a2654312d4b029e84428ddf95d24b99f0.jpg',
  img15: 'https://cdn.21st.dev/assets/mirror/3c/3c5076e4afd653f90b4c8458470c6b02faf67266e7b4db0edf0479581b9a76a7.jpg',
  img16: 'https://cdn.21st.dev/assets/mirror/3a/3a0154e96a80fc07cfa45173bd6fdb40ba5674748a2dfc250604c16edebd56b7.jpg',
  img17: 'https://cdn.21st.dev/assets/mirror/83/834025b20dcc006ed0f0e62db0e1bf00323f030d12317625bc8cde6b7cc36ee5.jpg',
  img18: 'https://cdn.21st.dev/assets/mirror/a7/a785b4e83d2191246b84422df30ebe3fc24b22b8278198ccd980340b92ecd9ff.jpg',
};

export type GalleryItem = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags: string[];
};

export const items: GalleryItem[] = [
  { id: 1, url: imgPreview.img1, title: 'Misty Mountain Majesty', description: 'A breathtaking view of misty mountains shrouded in clouds, creating an ethereal landscape.', tags: ['Misty', 'Mountains', 'Clouds', 'Ethereal', 'Landscape'] },
  { id: 2, url: imgPreview.img2, title: 'Winter Wonderland', description: "A serene winter scene with snow-covered trees and mountains, showcasing nature's pristine beauty.", tags: ['Winter', 'Snow', 'Trees', 'Mountains', 'Serene'] },
  { id: 3, url: imgPreview.img3, title: 'Autumn Mountain Retreat', description: 'A cozy cabin nestled in the mountains, surrounded by the vibrant colors of autumn foliage.', tags: ['Autumn', 'Cabin', 'Mountains', 'Foliage', 'Cozy'] },
  { id: 4, url: imgPreview.img4, title: 'Tranquil Lake Reflection', description: 'A calm mountain lake perfectly reflecting the surrounding peaks and sky, creating a mirror-like surface.', tags: ['Lake', 'Reflection', 'Mountains', 'Tranquil', 'Mirror'] },
  { id: 5, url: imgPreview.img5, title: 'Misty Mountain Peaks', description: "Majestic mountain peaks emerging from a sea of clouds, showcasing nature's grandeur.", tags: ['Misty', 'Peaks', 'Clouds', 'Majestic', 'Nature'] },
  { id: 6, url: imgPreview.img6, title: 'Golden Hour Glow', description: 'A stunning mountain landscape bathed in the warm light of the golden hour, highlighting every contour.', tags: ['Golden Hour', 'Mountains', 'Landscape', 'Warm', 'Scenic'] },
  { id: 7, url: imgPreview.img7, title: 'Snowy Mountain Highway', description: 'A winding road cutting through a snowy mountain landscape, inviting adventure and exploration.', tags: ['Snow', 'Road', 'Mountains', 'Winter', 'Adventure'] },
  { id: 8, url: imgPreview.img8, title: 'Foggy Mountain Forest', description: 'A mysterious and enchanting forest shrouded in fog, with mountains looming in the background.', tags: ['Fog', 'Forest', 'Mountains', 'Mysterious', 'Enchanting'] },
  { id: 9, url: imgPreview.img9, title: 'Sunset Mountain Silhouette', description: 'A dramatic silhouette of mountain peaks against a vibrant sunset sky, creating a stunning contrast.', tags: ['Sunset', 'Silhouette', 'Mountains', 'Dramatic', 'Sky'] },
  { id: 10, url: imgPreview.img10, title: 'Alpine Meadow Bliss', description: 'A lush alpine meadow dotted with wildflowers, set against a backdrop of towering mountain peaks.', tags: ['Alpine', 'Meadow', 'Wildflowers', 'Mountains', 'Peaceful'] },
  { id: 11, url: imgPreview.img11, title: 'Mountain Lake Serenity', description: 'A serene mountain lake surrounded by pine forests, reflecting the calm beauty of the wilderness.', tags: ['Lake', 'Mountains', 'Forest', 'Reflection', 'Serenity'] },
  { id: 12, url: imgPreview.img12, title: 'Icy Mountain Stream', description: "A crystal-clear mountain stream flowing through a snowy landscape, showcasing winter's pristine beauty.", tags: ['Stream', 'Snow', 'Winter', 'Mountains', 'Crystal'] },
  { id: 13, url: imgPreview.img13, title: 'Wildflower Mountain Meadow', description: 'A colorful array of wildflowers carpeting a mountain meadow, with majestic peaks in the distance.', tags: ['Wildflowers', 'Meadow', 'Mountains', 'Colorful', 'Nature'] },
  { id: 14, url: imgPreview.img14, title: 'Mountain Valley Vista', description: 'A sweeping view of a vast mountain valley, showcasing the grandeur of the natural landscape.', tags: ['Valley', 'Mountains', 'Vista', 'Landscape', 'Grandeur'] },
  { id: 15, url: imgPreview.img15, title: 'Rugged Mountain Terrain', description: 'A close-up view of rugged mountain terrain, highlighting the raw beauty and texture of the rocks.', tags: ['Rugged', 'Terrain', 'Mountains', 'Texture', 'Close-up'] },
  { id: 16, url: imgPreview.img16, title: 'Mountain Wildflower Bloom', description: 'A vibrant display of mountain wildflowers in full bloom, adding splashes of color to the alpine landscape.', tags: ['Wildflowers', 'Bloom', 'Mountains', 'Vibrant', 'Alpine'] },
  { id: 17, url: imgPreview.img17, title: 'Mountain River Rapids', description: 'A rushing mountain river cutting through rocky terrain, showcasing the power and beauty of nature.', tags: ['River', 'Rapids', 'Mountains', 'Power', 'Nature'] },
  { id: 18, url: imgPreview.img18, title: 'Lush Mountain Valley', description: 'A verdant mountain valley filled with lush vegetation and winding streams, epitomizing natural beauty.', tags: ['Valley', 'Lush', 'Mountains', 'Streams', 'Verdant'] },
];

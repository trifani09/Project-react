const CDN_BASE_URL = 'https://cdn.chemtradeasia.com';

export function cdn(path: string) {
  return `${CDN_BASE_URL}/${path.replace(/^\/+/, '')}`;
}

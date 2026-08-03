import { regions } from './data/regions.js';

function extractCode(plat: string): string | null {
    const normalized = plat.trim().toUpperCase();
    const match = normalized.match(/^([A-Z]{1,2})\s\d{1,4}\s[A-Z]{1,3}$/);
    if (!match) return null;
    return match[1];
}

function extractSuffix(plat: string): string | null {
    const normalized = plat.trim().toUpperCase();
    const match = normalized.match(/^[A-Z]{1,2}\s\d{1,4}\s([A-Z]{1,3})$/);
    if (!match) return null;
    return match[1];
}

export function getRegion(plat: string): string | null {
    const code = extractCode(plat);
    if (!code) return null;
    return regions[code]?.city ?? null;
}

export function getProvince(plat: string): string | null {
    const code = extractCode(plat);
    if (!code) return null;
    return regions[code]?.province ?? null;
}

export function getVehicleType(plat: string): string | null {
    const suffix = extractSuffix(plat);
    if (!suffix) return null;

    const firstChar = suffix[0];

    if (firstChar >= 'A' && firstChar <= 'F') return 'pribadi';
    if (firstChar >= 'G' && firstChar <= 'J') return 'dinas/pemerintah daerah';
    if (firstChar >= 'K' && firstChar <= 'T') return 'angkutan umum';
    if (firstChar >= 'U' && firstChar <= 'Z') return 'niaga/bus/truk';

    return null;
}

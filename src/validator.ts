//
const CIVIL_PLATE_REGEX = /^([A-Z]{1,2})\s(\d{1,4})\s([A-Z]{1,3})$/;

export function normalizePlat(plat: string): string {
    return plat.trim().toUpperCase();
}

export function isValidPlat(plat: string): boolean {
    if (typeof plat !== 'string') return false;
    const normalized = normalizePlat(plat);

    if (/^RI\s\d+$/.test(normalized)) return true;
    if (/^CD\s\d+\s\d+$/.test(normalized)) return true;
    if (/^TNI\s\d+$/.test(normalized)) return true;
    if (/^POLRI\s\d+$/.test(normalized)) return true;

    return CIVIL_PLATE_REGEX.test(normalized);
}

export function isGovernment(
    plat: string
): boolean | 'diplomatik' | 'tni' | 'polri' {
    if (typeof plat !== 'string') return false;
    const normalized = normalizePlat(plat);

    if (/^RI\s\d+$/.test(normalized)) return true;
    if (/^CD\s\d+\s\d+$/.test(normalized)) return 'diplomatik';
    if (/^TNI\s\d+$/.test(normalized)) return 'tni';
    if (/^POLRI\s\d+$/.test(normalized)) return 'polri';

    return false;
}

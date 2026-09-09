//
import { isValidPlat, isGovernment, normalizePlat } from './validator.js';
import { getRegion, getProvince, getVehicleType } from './lookup.js';

export interface PlatInfo {
    raw: string;
    valid: boolean;
    code: string | null;
    number: string | null;
    suffix: string | null;
    region: string | null;
    province: string | null;
    vehicleType: string | null;
    isGovernment: boolean | string;
}

export function parsePlat(plat: string): PlatInfo {
    if (typeof plat !== 'string') {
        return {
            raw: String(plat),
            valid: false,
            code: null,
            number: null,
            suffix: null,
            region: null,
            province: null,
            vehicleType: null,
            isGovernment: false,
        };
    }

    const normalized = normalizePlat(plat);
    const valid = isValidPlat(normalized);
    const govStatus = isGovernment(normalized);
    const civilMatch = normalized.match(
        /^([A-Z]{1,2})\s(\d{1,4})\s([A-Z]{1,3})$/
    );

    if (valid && !civilMatch) {
        return {
            raw: normalized,
            valid: true,
            code: null,
            number: null,
            suffix: null,
            region: null,
            province: null,
            vehicleType: null,
            isGovernment: govStatus,
        };
    }

    if (!valid || !civilMatch) {
        return {
            raw: normalized,
            valid: false,
            code: null,
            number: null,
            suffix: null,
            region: null,
            province: null,
            vehicleType: null,
            isGovernment: false,
        };
    }

    const [, code, number, suffix] = civilMatch;

    return {
        raw: normalized,
        valid: true,
        code,
        number,
        suffix,
        region: getRegion(normalized),
        province: getProvince(normalized),
        vehicleType: getVehicleType(normalized),
        isGovernment: govStatus,
    };
}

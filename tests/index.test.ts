import { describe, it, expect } from 'vitest';
import { isValidPlat, isGovernment } from '../src/validator.js';
import { getRegion, getProvince, getVehicleType } from '../src/lookup.js';
import { parsePlat } from '../src/parser.js';

describe('isValidPlat', () => {
    it('valid plat sipil', () => {
        expect(isValidPlat('B 1234 ABC')).toBe(true);
        expect(isValidPlat('D 5 XY')).toBe(true);
        expect(isValidPlat('AB 123 Z')).toBe(true);
    });

    it('valid plat khusus', () => {
        expect(isValidPlat('RI 1')).toBe(true);
        expect(isValidPlat('CD 1 2')).toBe(true);
        expect(isValidPlat('TNI 1234')).toBe(true);
        expect(isValidPlat('POLRI 1234')).toBe(true);
    });

    it('normalisasi lowercase', () => {
        expect(isValidPlat('b 1234 abc')).toBe(true);
        expect(isValidPlat('dk 1234 ab')).toBe(true);
    });

    it('format tidak valid', () => {
        expect(isValidPlat('123ABC')).toBe(false);
        expect(isValidPlat('')).toBe(false);
        expect(isValidPlat('ABCDE 123 X')).toBe(false);
        expect(isValidPlat('B1234ABC')).toBe(false);
    });
});

describe('isGovernment', () => {
    it('plat RI', () => {
        expect(isGovernment('RI 1')).toBe(true);
    });

    it('plat diplomatik', () => {
        expect(isGovernment('CD 1 2')).toBe('diplomatik');
    });

    it('plat TNI', () => {
        expect(isGovernment('TNI 1234')).toBe('tni');
    });

    it('plat POLRI', () => {
        expect(isGovernment('POLRI 1234')).toBe('polri');
    });

    it('plat sipil biasa', () => {
        expect(isGovernment('B 1234 ABC')).toBe(false);
    });

    it('normalisasi lowercase', () => {
        expect(isGovernment('tni 1234')).toBe('tni');
        expect(isGovernment('polri 1234')).toBe('polri');
    });
});

describe('getRegion', () => {
    it('kode dikenal', () => {
        expect(getRegion('B 1234 ABC')).toBe('Jakarta/Depok/Bekasi/Tangerang');
        expect(getRegion('D 5678 XY')).toBe('Bandung/Cimahi');
        expect(getRegion('DK 1234 AB')).toBe(
            'Denpasar/Badung/Buleleng/Tabanan/Gianyar/Klungkung/Bangli'
        );
    });

    it('kode tidak dikenal', () => {
        expect(getRegion('XX 1234 AB')).toBeNull();
    });

    it('format tidak valid', () => {
        expect(getRegion('tidakvalid')).toBeNull();
    });
});

describe('getProvince', () => {
    it('provinsi dikenal', () => {
        expect(getProvince('B 1234 ABC')).toBe('DKI Jakarta');
        expect(getProvince('DK 1234 AB')).toBe('Bali');
        expect(getProvince('BL 1234 AB')).toBe('Aceh');
    });

    it('kode tidak dikenal', () => {
        expect(getProvince('XX 1234 AB')).toBeNull();
    });
});

describe('getVehicleType', () => {
    it('kendaraan pribadi (A-F)', () => {
        expect(getVehicleType('B 1234 A')).toBe('pribadi');
        expect(getVehicleType('B 1234 FZZ')).toBe('pribadi');
    });

    it('kendaraan dinas (G-J)', () => {
        expect(getVehicleType('B 1234 G')).toBe('dinas/pemerintah daerah');
        expect(getVehicleType('B 1234 J')).toBe('dinas/pemerintah daerah');
    });

    it('angkutan umum (K-T)', () => {
        expect(getVehicleType('B 1234 K')).toBe('angkutan umum');
        expect(getVehicleType('B 1234 T')).toBe('angkutan umum');
    });

    it('niaga/bus/truk (U-Z)', () => {
        expect(getVehicleType('B 1234 U')).toBe('niaga/bus/truk');
        expect(getVehicleType('B 1234 Z')).toBe('niaga/bus/truk');
    });

    it('format tidak valid', () => {
        expect(getVehicleType('tidakvalid')).toBeNull();
    });
});

describe('parsePlat', () => {
    it('plat valid lengkap', () => {
        const result = parsePlat('B 1234 ABC');
        expect(result.valid).toBe(true);
        expect(result.code).toBe('B');
        expect(result.number).toBe('1234');
        expect(result.suffix).toBe('ABC');
        expect(result.province).toBe('DKI Jakarta');
        expect(result.isGovernment).toBe(false);
    });

    it('normalisasi lowercase sama dengan uppercase', () => {
        expect(parsePlat('b 1234 abc')).toEqual(parsePlat('B 1234 ABC'));
    });

    it('plat tidak valid — semua field null', () => {
        const result = parsePlat('tidakvalid');
        expect(result.valid).toBe(false);
        expect(result.code).toBeNull();
        expect(result.number).toBeNull();
        expect(result.suffix).toBeNull();
        expect(result.region).toBeNull();
        expect(result.province).toBeNull();
        expect(result.vehicleType).toBeNull();
    });

    it('plat TNI', () => {
        const result = parsePlat('TNI 1234');
        expect(result.valid).toBe(true);
        expect(result.isGovernment).toBe('tni');
    });

    it('plat diplomatik', () => {
        const result = parsePlat('CD 1 2');
        expect(result.valid).toBe(true);
        expect(result.isGovernment).toBe('diplomatik');
    });

    it('input kosong', () => {
        const result = parsePlat('');
        expect(result.valid).toBe(false);
    });
});

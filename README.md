# plat-id

[![npm version](https://img.shields.io/npm/v/plat-id)](https://www.npmjs.com/package/plat-id)
[![license](https://img.shields.io/npm/l/plat-id)](./LICENSE)
[![downloads](https://img.shields.io/npm/dm/plat-id)](https://www.npmjs.com/package/plat-id)

Utility library TypeScript/JavaScript untuk validasi, parsing, dan lookup plat nomor kendaraan Indonesia. Mencakup semua kode wilayah resmi Samsat, zero dependencies, dan mendukung ESM & CJS.

## Instalasi

```bash
npm install plat-id
```

## Quick Start

```ts
import { parsePlat, isValidPlat } from 'plat-id';

isValidPlat('B 1234 ABC'); // true
isValidPlat('tidakvalid'); // false

parsePlat('B 1234 ABC');
// {
//   raw: "B 1234 ABC",
//   valid: true,
//   code: "B",
//   number: "1234",
//   suffix: "ABC",
//   region: "Jakarta/Depok/Bekasi/Tangerang",
//   province: "DKI Jakarta",
//   vehicleType: "pribadi",
//   isGovernment: false
// }
```

## API Reference

### `isValidPlat(plat: string): boolean`

Validasi format plat nomor. Mendukung plat sipil, TNI, Polri, dan diplomatik.

```ts
isValidPlat('D 5678 XY'); // true
isValidPlat('TNI 1234'); // true
isValidPlat('CD 1 2'); // true
isValidPlat('123ABC'); // false
```

### `isGovernment(plat: string): boolean | "diplomatik" | "tni" | "polri"`

Deteksi plat pemerintah/militer/diplomatik.

```ts
isGovernment('RI 1'); // true
isGovernment('TNI 1234'); // "tni"
isGovernment('POLRI 1234'); // "polri"
isGovernment('CD 1 2'); // "diplomatik"
isGovernment('B 1234 ABC'); // false
```

### `getRegion(plat: string): string | null`

Lookup kota/kabupaten dari kode plat.

```ts
getRegion('D 5678 XY'); // "Bandung/Cimahi"
getRegion('DK 1234 AB'); // "Denpasar/Badung/..."
getRegion('XX 1234 AB'); // null
```

### `getProvince(plat: string): string | null`

Lookup provinsi dari kode plat.

```ts
getProvince('B 1234 ABC'); // "DKI Jakarta"
getProvince('DK 1234 AB'); // "Bali"
getProvince('BL 1234 AB'); // "Aceh"
```

### `getVehicleType(plat: string): string | null`

Tipe kendaraan dari huruf suffix.

```ts
getVehicleType('B 1234 A'); // "pribadi"
getVehicleType('B 1234 G'); // "dinas/pemerintah daerah"
getVehicleType('B 1234 K'); // "angkutan umum"
getVehicleType('B 1234 U'); // "niaga/bus/truk"
```

### `parsePlat(plat: string): PlatInfo`

Parse lengkap semua informasi plat sekaligus.

```ts
parsePlat('B 1234 ABC');
// { raw, valid, code, number, suffix, region, province, vehicleType, isGovernment }
```

## Format Plat yang Didukung

| Format     | Contoh       | Keterangan                                        |
| ---------- | ------------ | ------------------------------------------------- |
| Sipil      | `B 1234 ABC` | Kode 1-2 huruf, angka 1-4 digit, suffix 1-3 huruf |
| Pemerintah | `RI 1`       | Plat Presiden/Wakil Presiden                      |
| Diplomatik | `CD 1 2`     | Corps Diplomatique                                |
| TNI        | `TNI 1234`   | Kendaraan TNI                                     |
| Polri      | `POLRI 1234` | Kendaraan Polri                                   |

## Contributing

Pull request dan issue sangat disambut! Pastikan semua test pass sebelum submit PR:

```bash
npm test
```

## License

MIT © Refrilly Gregorian Tompodung

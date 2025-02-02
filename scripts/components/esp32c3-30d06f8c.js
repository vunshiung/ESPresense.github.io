import { R as s } from "./rom-7bab3197.js";
const F = 1077413538, M = "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", Q = 1077411840, R = "IGvIP1wKOECsCjhABAs4QKgLOEAUDDhAwgs4QCgJOEBkCzhApAs4QBgLOEDYCDhATAs4QNgIOEA2CjhAfAo4QKwKOEAECzhASAo4QIwJOEC8CThARAo4QGYOOECsCjhALA04QB4OOEAYCDhARg44QBgIOEAYCDhAGAg4QBgIOEAYCDhAGAg4QBgIOEAYCDhAyAw4QBgIOEBKDThAHg44QA==", D = 1070164912, c = {
  entry: F,
  text: M,
  text_start: Q,
  data: R,
  data_start: D
};
class x extends s {
  constructor() {
    super(...arguments), this.CHIP_NAME = "ESP32-C3", this.IMAGE_CHIP_ID = 5, this.EFUSE_BASE = 1610647552, this.MAC_EFUSE_REG = this.EFUSE_BASE + 68, this.UART_CLKDIV_REG = 1072955412, this.UART_CLKDIV_MASK = 1048575, this.UART_DATE_REG_ADDR = 1610612860, this.FLASH_WRITE_SIZE = 1024, this.BOOTLOADER_FLASH_OFFSET = 0, this.FLASH_SIZES = {
      "1MB": 0,
      "2MB": 16,
      "4MB": 32,
      "8MB": 48,
      "16MB": 64
    }, this.SPI_REG_BASE = 1610620928, this.SPI_USR_OFFS = 24, this.SPI_USR1_OFFS = 28, this.SPI_USR2_OFFS = 32, this.SPI_MOSI_DLEN_OFFS = 36, this.SPI_MISO_DLEN_OFFS = 40, this.SPI_W0_OFFS = 88, this.TEXT_START = c.text_start, this.ENTRY = c.entry, this.DATA_START = c.data_start, this.ROM_DATA = c.data, this.ROM_TEXT = c.text;
  }
  async get_pkg_version(E) {
    const B = this.EFUSE_BASE + 68 + 4 * 3;
    return await E.read_reg(B) >> 21 & 7;
  }
  async get_chip_revision(E) {
    const A = this.EFUSE_BASE + 68, w = 3, B = 18, t = A + 4 * w;
    return (await E.read_reg(t) & 7 << B) >> B;
  }
  async get_chip_description(E) {
    let A;
    await this.get_pkg_version(E) === 0 ? A = "ESP32-C3" : A = "unknown ESP32-C3";
    const B = await this.get_chip_revision(E);
    return A += " (revision " + B + ")", A;
  }
  async get_chip_features(E) {
    return ["Wi-Fi"];
  }
  async get_crystal_freq(E) {
    return 40;
  }
  _d2h(E) {
    const A = (+E).toString(16);
    return A.length === 1 ? "0" + A : A;
  }
  async read_mac(E) {
    let A = await E.read_reg(this.MAC_EFUSE_REG);
    A = A >>> 0;
    let w = await E.read_reg(this.MAC_EFUSE_REG + 4);
    w = w >>> 0 & 65535;
    const B = new Uint8Array(6);
    return B[0] = w >> 8 & 255, B[1] = w & 255, B[2] = A >> 24 & 255, B[3] = A >> 16 & 255, B[4] = A >> 8 & 255, B[5] = A & 255, this._d2h(B[0]) + ":" + this._d2h(B[1]) + ":" + this._d2h(B[2]) + ":" + this._d2h(B[3]) + ":" + this._d2h(B[4]) + ":" + this._d2h(B[5]);
  }
  get_erase_size(E, A) {
    return A;
  }
}
export {
  x as ESP32C3ROM
};

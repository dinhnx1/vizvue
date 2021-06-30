interface SunburstData {
  name: string | "";
  children: Array<SunburstData> | [];
  size: number | 0;
}
export { SunburstData };

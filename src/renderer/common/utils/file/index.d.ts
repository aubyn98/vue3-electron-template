declare namespace file {
  interface Opts {
    types: Array<{
      description: string
      accept: {
        [index: string]: string[]
      }
    }>
    excludeAcceptAllOption: boolean
    multiple: boolean
  }
  /**
   * 获取文件DataURL
   * @param { function } file 文件 Blob | File
   */
  function readAsDataURL(file: Blob | File): Promise<string>

  /**
   * 获取文件
   * @param { function } opts  可选项
   */
  function getFile(opts?: Opts): Promise<Array<Blob | File>>

  /**
   * 处理图片文件列表
   * @param { function } opts  可选项
   */
  function imgFilesHandle(imgFiles: FileList | Array<Blob | File>): Promise<{ dataURL: string; file: Blob | File }[]>

  /**
   * 获取图片文件
   * @param { function } opts  可选项
   */
  function getImgFile(opts?: Opts): Promise<{ dataURL: string; file: Blob | File }[]>
}
declare module 'utils/file' {
  export = file
}

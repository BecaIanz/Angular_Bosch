export interface IPixel {
    id: number,
    x: number,
    y: number,
    color: string,
    userId: number
}
// O mock vai começar vazio e sendo uma matriz, e os elementos vão ser criados no html e os valores serão atribuidos para ele lá
export const MockPixel: IPixel[[]]
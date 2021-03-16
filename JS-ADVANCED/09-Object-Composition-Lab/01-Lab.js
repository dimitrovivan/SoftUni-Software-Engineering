function solve(input) {

    let result = input.map(([width, height]) => {
        
        return {
            width,
            height,
            area() {
                return this.width * this.height;
            },
            compareTo(obj) {
                return this.area() - obj.area();
            }
        }
    })
    .sort((curr,next) => next.area() - curr.area() || next.width - curr.width);

    console.log(result);
}


solve([[1,20],[20,1],[5,3],[5,3]]);
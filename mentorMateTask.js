class LineBuilder {

    constructor() {
        this.line = "";
    }

    withDashes(n) {
        this.line = this.line.concat('-'.repeat(n));
        return this;
    }

    withStars(n) {
        this.line = this.line.concat('*'.repeat(n));
        return this;
    }

    repeat(n) {
        this.line = this.line.repeat(n);
        return this;
    }

    build() {
        return this.line;
    }
}



function drawMentorMate(n) {

    for (let i = 0; i < n / 2; i++) {
        let line = new LineBuilder()
                .withDashes(n - i).withStars(n + 2 * i).withDashes(n - 2 * i).withStars(n + 2 * i).withDashes(n - i)
                .repeat(2).build();
        console.log(line)
    }
    for (let i = 0; i < n / 2; i++) {
        let line = new LineBuilder()
        .withDashes((n / 2) - i).withStars(n).withDashes(1 + 2 * i).withStars(n * 2 - 2 * i - 1)
        .withDashes(1 + 2 * i).withStars(n).withDashes((n / 2) - i)
        .repeat(2).build();
        console.log(line);
    }
}
drawMentorMate(5);

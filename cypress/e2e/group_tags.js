describe('Group Suite', () => {
    it('Smoke Test', () => {
        expect(true).to.be.true
    })

    it('Regression Test', () => {
        expect(2).to.eql(2)
    })

    it('Sprint and Regression Test', { tags: ['Sprint', 'Regression'] }, () => {
        expect("QA Test Let's Test").to.contains("Test")
    })

    it('Sprint Test', { tags: 'Sprint' }, () => {
        expect("QA Test Let's Test").to.contains("Test")
    })

    it('Regression Test with Tags', { tags: 'Regression' }, () => {
        expect("QA Test Let's Test").to.contains("Test")
    })
})
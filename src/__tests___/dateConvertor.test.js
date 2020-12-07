import DateConvertor from '../Helpers/dateConvertor/dateConvertor'

describe('DateConverter', ()=> {
    it('should return a formatted date', ()=> {
        const unformattedDate = ('2020/12/06')
        expect(DateConvertor(unformattedDate)).toEqual('06 Sun')
    })
})

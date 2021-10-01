import getGif from '../../helpers/getGif'

describe('Pruebas getGif', () => {

    test('Debe de retornar 25 gifs', async () => {
        
        const gifs = await getGif( 'One punch' )

        expect( gifs.lenght ).toBe( '25' )
    })
    

})
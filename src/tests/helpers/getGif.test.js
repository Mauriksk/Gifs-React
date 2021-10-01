import {getGif} from '../../helpers/getGif'

describe('Pruebas getGif', () => {

    test('Debe de retornar 25 gifs', async () => {
        
        const gifs = await getGif( 'One punch' )

        expect( gifs.length ).toBe( 25 )
    })

    test('No este vacio', async () => {
        
        const gifs = await getGif('');

        expect( gifs.length ).toBe( 0 )

    })
    
    

})
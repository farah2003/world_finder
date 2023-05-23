import {  extendTheme } from '@chakra-ui/react'
export const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          colorScheme: 'red',
          height: '60px',
          borderRadius: '5px',
          fontSize: '2xl',
          width: '100%',
          maxWidth: { base: '360px', md: '180px' },
        },
      },
  
      Input: {
        variants: {
          filled: {
            field: {
              bg: 'white',
              borderRadius: '5px',
              height: '40px',
              _focus: {
                bg: 'white',
                outline: 'none',
                boxShadow: 'none',
                border: 'none',
              },
            },
          },
        },
        
      },
      
      Spinner: {
        sizes: {
          xl: {
            width: "120px", 
            height: "120px", 
          },
        },
      },
    }  
  });
  
// eu dou um alias no inpu para Chakrainput para nao conflitar com o input, uso o InputProps extendendo do chakra
import { FormControl, FormLabel, Input as ChakraInput , InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}

// o ...rest é todo o restante das possiveis configurações do campo input
export function Input({ name, label, ...rest} : InputProps) {
    return(
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                type="email" 
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                bgColor: 'gray.900'
                }}
                size="lg"   
                {...rest}              
            />
        </FormControl>
    );
}
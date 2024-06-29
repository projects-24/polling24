import React from 'react'
import Input from 'funuicss/ui/input/Input'
import Text from 'funuicss/ui/text/Text'


export default function InputUi
({label, standard, hint, required, ...rest }) {
  return <div>
    <Text 
    text={`${label || ''} ${required ? '*' : ''}` || ''} 
    block 
    size='smaller' 
    uppercase 
    bold 
    color='s'
    funcss='margin-bottom-10'
    />
    <Input label={hint || ''} funcss=' _input roundEdgeSmall text-minified' borderless {...rest} fullWidth />
</div>
}

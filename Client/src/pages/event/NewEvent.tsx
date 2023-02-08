import React from 'react'
import tw from 'tailwind-styled-components'

const Container=tw.div`flex justify-center items-center`
const Form=tw.form`w-[30rem] border-2 my-8 min-h-[30rem] rounded-lg`
const Field=tw.div``
const Label=tw.label``
const Input=tw.input``

const NewEvent = () => {
    return (
        <Container>
            <Form>
                <Field>
                    <Label>Title</Label>
                    <Input/>
                </Field>
                <Field>
                    <Label>Title</Label>
                    <Input/>
                </Field>
                <Field>
                    <Label>Title</Label>
                    <Input/>
                </Field>
                <Field>
                    <Label>Title</Label>
                    <Input/>
                </Field>
            </Form>
        </Container>
    )
}
export default NewEvent
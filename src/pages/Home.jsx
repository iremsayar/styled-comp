import React from 'react'
import Navbar from '../components/Navbar'
import { Card } from '../styledComponents/Card'
import styled from 'styled-components'
import { margin, padding } from '../styledComponents/baseCss'
import { PrimaryButton } from '../styledComponents/PrimaryButton'
import { SecondaryButton } from '../styledComponents'
import { TextStyle } from '../styledComponents'
import ChangeThemeButton from '../components/ChangeThemeButton'
const Center = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
function Home() {
    return (
        <div>
            <Navbar />
            <ChangeThemeButton />
            <Center>
                <Card>
                    <TextStyle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit ducimus rem aperiam impedit culpa porro enim maiores fuga? Itaque animi fugit a iusto necessitatibus, deleniti reiciendis incidunt eum quam, est labore provident consequuntur quos tempore quae atque. Dolorum, explicabo.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem, sed eveniet, dicta nisi sit perspiciatis ab aliquid repellat voluptate qui quas autem beatae assumenda explicabo! A sapiente corrupti consequuntur.
                        <PrimaryButton>Lorem, ipsum.</PrimaryButton> <SecondaryButton>Lorem, ipsum.</SecondaryButton>
                    </TextStyle>

                </Card>
                <Card>
                    <TextStyle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam cum, ullam quaerat eum blanditiis incidunt, ipsam natus sit aspernatur, nam odio expedita. Delectus maxime est a cumque voluptas consequatur in totam deserunt atque odit distinctio hic recusandae ex tempora perspiciatis quasi ducimus saepe nobis fuga, perferendis molestias pariatur dicta illum! Nostrum praesentium natus fugit illum velit! Quis totam ipsa adipisci corporis soluta repellat. Fugiat?
                        <PrimaryButton>Lorem, ipsum.</PrimaryButton><SecondaryButton>Lorem, ipsum.</SecondaryButton>
                    </TextStyle>

                </Card>
                <Card>
                    <TextStyle>Ratione, fugit distinctio ad in pariatur praesentium voluptatibus, porro molestiae iure esse tempore earum excepturi expedita ipsa voluptates neque repudiandae numquam quae. Neque molestiae quis asperiores aliquid excepturi quam officiis mollitia. Nam, consequatur tenetur. Eveniet incidunt saepe impedit blanditiis fugit?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem, sed eveniet, dicta nisi sit perspiciatis ab aliquid repellat voluptate qui quas autem beatae assumenda explicabo! A sapiente corrupti consequuntur.
                        <PrimaryButton>Lorem, ipsum.</PrimaryButton><SecondaryButton>Lorem, ipsum.</SecondaryButton>
                    </TextStyle>

                </Card>
                <Card>
                    <TextStyle> Sit est, repellendus ullam vitae dignissimos optio deserunt, nisi iusto explicabo nesciunt laboriosam! Sequi omnis ipsam molestiae alias ex! Tempora obcaecati sint, ut aspernatur nam nemo ipsa perferendis nesciunt quaerat, doloribus, nisi quidem exercitationem repellat animi.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem, sed eveniet, dicta nisi sit perspiciatis ab aliquid repellat voluptate qui quas autem beatae assumenda explicabo! A sapiente corrupti consequuntur.
                        <PrimaryButton>Lorem, ipsum.</PrimaryButton><SecondaryButton>Lorem, ipsum.</SecondaryButton>
                    </TextStyle>

                </Card>
            </Center>
        </div>
    )
}

export default Home

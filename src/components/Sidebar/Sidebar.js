import React from 'react';

// Components
import MenuContainer from '../Menu/MenuContainer/MenuContainer';
import MenuItem from '../Menu/MenuItem/MenuItem';

// Styles
import { Wrapper } from './Sidebar.styles';

const Sidebar = () => (
    <Wrapper>
        <h3 id='logo'>LOGO</h3>

        <MenuContainer title='MAIN MENU'>
            <MenuItem 
                link='/'
                icon='bx:bxs-home'
                title='Home'
            />
            <MenuItem 
                link='/create-contract'
                icon='clarity:note-edit-solid'
                title='Create a contract'
            />
            <MenuItem 
                link='/compliance-documents'
                icon='emojione-monotone:right-arrow-curving-up'
                title='Compliance Documents'
            />
            <MenuItem 
                link='/invoices'
                icon='heroicons-solid:document-text'
                title='Invoices'
            />
            <MenuItem 
                link='/taxes'
                icon='fluent:document-landscape-data-24-filled'
                title='Taxes'
            />
                {/* 
            <MenuItem>
                <InlineIcon className='icons' icon="fluent:document-landscape-data-24-filled" />
                Taxes
            </MenuItem>
            <MenuItem>
                <InlineIcon className='icons' icon="ion:sync-circle-sharp" />
                Transactions
            </MenuItem>
            <MenuItem>
                <InlineIcon className='icons' icon="clarity:wallet-solid" />
                Scrow Card
            </MenuItem>
        </MenuContainer>

        <MenuContainer title='SUPPORT'>
            <MenuItem>
                <InlineIcon className='icons' icon="eva:phone-fill" />
                Scrow Support
            </MenuItem>
            <MenuItem>
                <InlineIcon className='icons' icon="cib:telegram-plane" />
                Help Center
            </MenuItem>
            <MenuItem>
                <InlineIcon className='icons' icon="bytesize:settings" />
                User Settings
            </MenuItem> */}
        </MenuContainer>

    </Wrapper>
)

export default Sidebar

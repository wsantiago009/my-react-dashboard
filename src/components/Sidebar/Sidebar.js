import React from 'react';
import { InlineIcon } from '@iconify/react';

// Components
import MenuItem from './MenuItem/MenuItem';

// Styles
import { Wrapper } from './Sidebar.styles';

const Sidebar = () => (
    <Wrapper>
        <h3>LOGO</h3>

        <div className='menuWrapper'>
            <ul className='list-style'>
                <MenuItem link='#'>
                    <InlineIcon className='icons' icon="bx:bxs-home" />
                    Home
                </MenuItem>
                <MenuItem link='#'>
                    <InlineIcon className='icons' icon="clarity:note-edit-solid" />
                    Create a contract
                </MenuItem>
                <MenuItem link='#'>
                    <InlineIcon className='icons' icon="emojione-monotone:right-arrow-curving-up" />
                    Compliance Documents
                </MenuItem>
                <MenuItem link='#'>
                    <InlineIcon className='icons' icon="heroicons-solid:document-text" />
                    Invoices
                </MenuItem>
                <MenuItem link='#'>
                    <InlineIcon className='icons' icon="fluent:document-landscape-data-24-filled" />
                    Taxes
                </MenuItem>
                <MenuItem link='#'>
                    <InlineIcon className='icons' icon="ion:sync-circle-sharp" />
                    Transactions
                </MenuItem>
                <MenuItem link='#'>
                    <InlineIcon className='icons' icon="clarity:wallet-solid" />
                    Scrow Card
                </MenuItem>
            </ul>
        </div>
    </Wrapper>
)

export default Sidebar

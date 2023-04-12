import React from 'react'
import $ from "jquery";
import "./PlanSection.css"
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import TabletAndroidOutlinedIcon from '@mui/icons-material/TabletAndroidOutlined';

function PlanSection() {
    $(document).ready(() => {
        $('.mobile').on('click', () => {
            $('.mPC').addClass('PC')
            $('.bPC, .sPC, .pPC').removeClass('PC')
        })

        $('.basic').on('click', () => {
            $('.bPC').addClass('PC')
            $('.mPC, .sPC, .pPC').removeClass('PC')
        })

        $('.standard').on('click', () => {
            $('.sPC').addClass('PC')
            $('.mPC, .bPC, .pPC').removeClass('PC')
        })

        $('.premium').on('click', () => {
            $('.pPC').addClass('PC')
            $('.bPC, .sPC, .mPC').removeClass('PC')
        })
    })
    return (
        <div className='planSection'>
            <div className='planCardsContainer'>
                <div className='plansecgroup1'><p></p></div>
                <div className='planCardsBox'>
                    <div className='planCards mobile'><p>Mobile</p></div>
                    <div className='planCards basic'><p>Basic</p></div>
                    <div className='planCards standard'><p>Standard</p></div>
                    <div className='planCards premium'><p>Premium</p></div>
                </div>
            </div>

            <div className='plansecgroup'>
                <div className='plansecgroup1'><p>Monthly price</p></div>
                <div className='plansecgroup2'>
                    <p className='mPC'>₹ 149</p>
                    <p className='bPC'>₹ 199</p>
                    <p className='sPC'>₹ 499</p>
                    <p className='pPC'>₹ 649</p>
                </div>
            </div>

            <div className='plansecgroup'>
                <div className='plansecgroup1'><p>Video quality</p></div>
                <div className='plansecgroup2'>
                    <p className='mPC'>Good</p>
                    <p className='bPC'>Good</p>
                    <p className='sPC'>Better</p>
                    <p className='pPC'>Best</p>
                </div>
            </div>

            <div className='plansecgroup'>
                <div className='plansecgroup1'><p>Resolution</p></div>
                <div className='plansecgroup2 plansecgroup2m'>
                    <p className='mPC'>480p</p>
                    <p className='bPC'>720p</p>
                    <p className='sPC'>1080p</p>
                    <p className='pPC'>4K+HDR</p>
                </div>
            </div>

            <div className='plansecgroupScreen'>
                <div className='plansecgroup1'><p>Devices you can use to watch</p></div>
                <div className='plansecgroup3'>
                    <div className='plansecgroupScreengroup mPC'>
                        <PhoneAndroidOutlinedIcon />
                        <TabletAndroidOutlinedIcon />
                    </div>
                    <div className='plansecgroupScreengroup bPC'>
                        <PhoneAndroidOutlinedIcon />
                        <TabletAndroidOutlinedIcon />
                        <LaptopWindowsOutlinedIcon />
                        <DesktopWindowsOutlinedIcon />
                    </div>
                    <div className='plansecgroupScreengroup sPC'>
                        <PhoneAndroidOutlinedIcon />
                        <TabletAndroidOutlinedIcon />
                        <LaptopWindowsOutlinedIcon />
                        <DesktopWindowsOutlinedIcon />
                    </div>
                    <div className='plansecgroupScreengroup pPC'>
                        <PhoneAndroidOutlinedIcon />
                        <TabletAndroidOutlinedIcon />
                        <LaptopWindowsOutlinedIcon />
                        <DesktopWindowsOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanSection
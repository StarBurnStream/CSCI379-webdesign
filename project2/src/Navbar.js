import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const BaseContainer = props =>
    <div
        style={{
            display: 'inline-block',
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: 'Roboto',
            width: "100%",
			height: "1000px",
            ...props.style
        }}
    >
        {props.children}
    </div>;

const Title = styled.div`
    padding: 20px;
	font-size: 20px;
	text-align: left;
`;

const BasicSideNav = () =>
    <SideNav highlightBgColor="#00bcd4">
        <Title> New Banner </Title>
		<Nav id="home">
            <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
            <NavText><Link to="/" className="links"> Home </Link></NavText>
        </Nav>
        <Nav id="search">
            <NavIcon><Icon20 icon={ic_business} /></NavIcon>
			<NavText><Link to="/searchcourse" className="links"> Search Course </Link></NavText>
			<Nav id="CRN">
                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                <NavText><Link to="/searchbycrn" className="links"> Search by CRN </Link></NavText>
            </Nav>
            <Nav id="name">
                <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                <NavText><Link to="/searchbyname" className="links"> Search by Name </Link></NavText>
            </Nav>
            <Nav id="professor">
                <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                <NavText><Link to="/searchbyprofessor" className="links"> Search by Professor </Link></NavText>
            </Nav>
        </Nav>
        <Nav id="recommendation">
            <NavIcon><Icon20 icon={ic_business_center} /></NavIcon>
            <NavText><Link to="/courserecommendation" className="links"> Course Recommendation </Link></NavText>
        </Nav>
        <Nav id="help">
            <NavIcon ><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
            <NavText><Link to="/help" className="links"> Help </Link></NavText>
        </Nav>
    </SideNav>;

class Navbar extends Component {

    render() {
        return (
            <div style={{ display: 'flex'}} >
                <BaseContainer style={{ background: '#2c3e50', color: '#FFF' }}>
                    <BasicSideNav />
                </BaseContainer>
            </div>
        );
    }
}

export default Navbar
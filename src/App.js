import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box } from '@mui/material';
import React from 'react';
import { Feed, NavBar, SearchResult, VideoDetail,ChannelDetail } from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <NavBar />
            {/* router to place individual component */}
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/searchInput:' element={<SearchResult />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App
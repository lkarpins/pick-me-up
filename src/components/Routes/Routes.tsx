import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdviceContainer } from '../AdviceContainer/AdviceContainer';
import { AppContainer } from '../AppContainer/AppContainer';
import { ComplimentContainer } from '../ComplimentContainer/ComplimentContainer';

export interface RoutesProps {
    compliment: string;
    advice: string;
}

export const Routes = ({
    compliment,
    advice
}: RoutesProps) => {
    return (
        <Switch>
            <Route exact path="/">
                <AppContainer />
            </Route>
            <Route exact path="/compliment">
                <ComplimentContainer compliment={compliment} />
            </Route>
            <Route exact path="/advice">
                <AdviceContainer advice={advice} />
            </Route>
        </Switch>
    );
}
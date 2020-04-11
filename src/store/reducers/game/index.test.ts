import { PHASE_NAME } from '../../../types/phase';
import { GAME_ACTION_TYPES, TInitGameAction } from '../../actions/game';
import gameReducer, { IGameState } from '.';

describe('store > reducers > game', () => {
  const mockGameState: IGameState = {
    gameCode: '123',
    villageName: 'Test Village',
    players: [],
    phase: {
      name: PHASE_NAME.LOBBY,
      data: undefined,
    },
  };
  describe('with an unknown action', () => {
    const action = { type: 'UNKNOWN', payload: undefined };

    it('has no effect on null state', () => {
      expect(gameReducer(null, action)).toBeNull();
    });

    it('has no effect on non-null state', () => {
      expect(gameReducer(mockGameState, action)).toEqual(mockGameState);
    });
  });

  describe(`with ${GAME_ACTION_TYPES.INIT_GAME} action`, () => {
    const mockAction: TInitGameAction = {
      type: GAME_ACTION_TYPES.INIT_GAME,
      payload: { ...mockGameState, villageName: 'Another Village' },
    };
    it('inits new game on null state', () => {
      expect(gameReducer(null, mockAction)).toEqual(mockAction.payload);
    });

    it('does not overwrite existing game state', () => {
      expect(gameReducer(mockGameState, mockAction)).toEqual(mockGameState);
    });
  });
});
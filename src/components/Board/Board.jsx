import React from 'react';
import Strike from '../Strike/Strike';
import Tile from '../Tile/Tile';
import './Board.sass';

export default function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
	return (
		<div className="board">
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(0)}
				value={tiles[0]}
				className="board__right-border board__bottom-border"
			/>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(1)}
				value={tiles[1]}
				className="board__right-border board__bottom-border"
			/>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(2)}
				value={tiles[2]}
				className="board__bottom-border"
			/>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(3)}
				value={tiles[3]}
				className="board__right-border board__bottom-border"
			/>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(4)}
				value={tiles[4]}
				className="board__right-border board__bottom-border"
			/>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(5)}
				value={tiles[5]}
				className="board__bottom-border"
			/>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(6)}
				value={tiles[6]}
				className="board__right-border"
			/>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(7)}
				value={tiles[7]}
				className="board__right-border"
			/>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onTileClick(8)}
				value={tiles[8]}
			/>
			<Strike strikeClass={strikeClass} />
		</div>
	);
}

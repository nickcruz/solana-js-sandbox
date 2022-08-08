import { mintToBuilder } from "@metaplex-foundation/js";
import { KEYPAIR_92GL, KEYPAIR_CboH, KEYPAIR_HmzQ } from "../src/keypairs";

const mintKeypair = KEYPAIR_92GL;
const destinationKeypair = KEYPAIR_HmzQ;
const mintAuthority = KEYPAIR_CboH;

describe("Instruction: InitializeMint", () => {
  test("sanity checks", () => {
    expect(mintKeypair.publicKey.toString()).toBe(
      "92GLpcVjbC1dA4TNRrb6ooNQGj7iqYk4bR1Xvwat2Wkf"
    );
    expect(destinationKeypair.publicKey.toString()).toBe(
      "HmzQ2Qy4UAJLyYBMuA56ErzXL5DAnNQzaMNTzGKPHdQA"
    );
    expect(mintAuthority.publicKey.toString()).toBe(
      "CboHzBWtkrx2a8NuJAT7yAQBcviKz944ihbufZAx3ZpH"
    );
  });

  test("basic instruction", () => {
    const tx = mintToBuilder({
      mint: mintKeypair.publicKey,
      destination: destinationKeypair.publicKey,
      mintAuthority,
      amount: 1,
    }).toTransaction();

    tx.recentBlockhash = "Eit7RCyhUixAe2hGBS8oqnw59QK3kgMMjfLME5bm9wRn";
    tx.sign(mintAuthority);

    const serializedTx = tx.serialize().toString("base64");
    expect(serializedTx).toBe(
      "AfRYDax10KJuroMG5AvKPWlZUVOg6bGsPXK8n/gorLCUf3YzJMeAa/8klZukCt68/Xio975Byveg2wn8FG0o+QUBAAEErFqlrwrywtwjXsQB1O1cieb2oVvQ/GC+KL+QkD1OS5Z3MGxViNw4B26UTdl5FyefR+oQaPJ0EmrAJv76aOeg8PlBcgStmhLxhpL3FragO9vsGMIBV/pu+lpbifkTgF2vBt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKnL4ojBmZTwMuZiCU/ds/OuWkNoqQa7pUgknBM5hCZF9QEDAwECAAkHAQAAAAAAAAA="
    );
  });

  test("mint 2", () => {
    const tx = mintToBuilder({
      mint: mintKeypair.publicKey,
      destination: destinationKeypair.publicKey,
      mintAuthority,
      amount: 2,
    }).toTransaction();

    tx.recentBlockhash = "Eit7RCyhUixAe2hGBS8oqnw59QK3kgMMjfLME5bm9wRn";
    tx.sign(mintAuthority);

    const serializedTx = tx.serialize().toString("base64");
    expect(serializedTx).toBe(
      "Aam3DFo+oKVjXARZbOPvmeMJatqm/mwV4I6a+RtsEzKaEEcbPtbPS5+kHVFImOrR55zypmD7+dJYD46RwBMoIA8BAAEErFqlrwrywtwjXsQB1O1cieb2oVvQ/GC+KL+QkD1OS5Z3MGxViNw4B26UTdl5FyefR+oQaPJ0EmrAJv76aOeg8PlBcgStmhLxhpL3FragO9vsGMIBV/pu+lpbifkTgF2vBt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKnL4ojBmZTwMuZiCU/ds/OuWkNoqQa7pUgknBM5hCZF9QEDAwECAAkHAgAAAAAAAAA="
    );
  });

  test("mint 99999999", () => {
    const tx = mintToBuilder({
      mint: mintKeypair.publicKey,
      destination: destinationKeypair.publicKey,
      mintAuthority,
      amount: 99999999,
    }).toTransaction();

    tx.recentBlockhash = "Eit7RCyhUixAe2hGBS8oqnw59QK3kgMMjfLME5bm9wRn";
    tx.sign(mintAuthority);

    const serializedTx = tx.serialize().toString("base64");
    expect(serializedTx).toBe(
      "AcvszODlzCObVWj9gSAE4zagap/N9tx0fYNLuKQowALJeW3oeWdNMnCstdnXkvjw50tQZxs74U8N6JEykNJlIwcBAAEErFqlrwrywtwjXsQB1O1cieb2oVvQ/GC+KL+QkD1OS5Z3MGxViNw4B26UTdl5FyefR+oQaPJ0EmrAJv76aOeg8PlBcgStmhLxhpL3FragO9vsGMIBV/pu+lpbifkTgF2vBt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKnL4ojBmZTwMuZiCU/ds/OuWkNoqQa7pUgknBM5hCZF9QEDAwECAAkH/+D1BQAAAAA="
    );
  });
});

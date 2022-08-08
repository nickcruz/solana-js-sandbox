import { initializeMintBuilder } from "@metaplex-foundation/js";
import { Keypair, PublicKey } from "@solana/web3.js";

const mintKeypair = Keypair.fromSecretKey(
  new Uint8Array([
    248, 245, 206, 215, 221, 248, 207, 125, 63, 204, 25, 40, 10, 180, 174, 189,
    124, 221, 111, 20, 34, 34, 147, 0, 194, 55, 115, 203, 41, 9, 128, 188, 119,
    48, 108, 85, 136, 220, 56, 7, 110, 148, 77, 217, 121, 23, 39, 159, 71, 234,
    16, 104, 242, 116, 18, 106, 192, 38, 254, 250, 104, 231, 160, 240,
  ])
);
const mintAuthority = new PublicKey(
  "9Aq6XkUT8Nx2ztkpkUxc4HiVCFWKTJZWiLnhC94iofvy"
);
const freezeAuthority = new PublicKey(
  "22BMtVRGveoYeJyvYDHfJP5JMCRKTYbp3QMhxU1P8w1n"
);

describe("Instruction: InitializeMint", () => {
  test("sanity checks", () => {
    expect(mintKeypair.publicKey.toString()).toBe(
      "92GLpcVjbC1dA4TNRrb6ooNQGj7iqYk4bR1Xvwat2Wkf"
    );
    expect(mintAuthority.toString()).toBe(
      "9Aq6XkUT8Nx2ztkpkUxc4HiVCFWKTJZWiLnhC94iofvy"
    );
    expect(freezeAuthority.toString()).toBe(
      "22BMtVRGveoYeJyvYDHfJP5JMCRKTYbp3QMhxU1P8w1n"
    );
  });

  test("basic instruction", () => {
    const tx = initializeMintBuilder({
      mint: mintKeypair,
      decimals: 0,
      mintAuthority,
    }).toTransaction();

    tx.recentBlockhash = "Eit7RCyhUixAe2hGBS8oqnw59QK3kgMMjfLME5bm9wRn";
    tx.sign(mintKeypair);

    const serializedTx = tx.serialize().toString("base64");

    expect(serializedTx).toBe(
      "AUoR2pOLvCw+4HBuJeRwiFZrQEUwxGxjwYL7lt7Ml7+gnqJ5GDKXPZzqc86enRU/eWrbrTwjTqnwtvCzTorbyQwBAAIDdzBsVYjcOAdulE3ZeRcnn0fqEGjydBJqwCb++mjnoPAGp9UXGSxcUSGMyUw9SvF/WNruCJuh/UTj29mKAAAAAAbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpy+KIwZmU8DLmYglP3bPzrlpDaKkGu6VIJJwTOYQmRfUBAgIAAUMAAHliGrHMD2/tnxlfFt004e78Gx01J8/pMuF7TJD14g6yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
  });
  test("with freeze authority", () => {
    const tx = initializeMintBuilder({
      mint: mintKeypair,
      decimals: 0,
      mintAuthority,
      freezeAuthority,
    }).toTransaction();

    tx.recentBlockhash = "Eit7RCyhUixAe2hGBS8oqnw59QK3kgMMjfLME5bm9wRn";
    tx.sign(mintKeypair);

    const serializedTx = tx.serialize().toString("base64");

    expect(serializedTx).toBe(
      "Aa/cfiQCH2/Q1hGyG9bZYvmcMvJH+Y0IzAnA1GuhnqlzRUFzRpR261HQaUYXvW0VNPA8pvqrOIHtK0Ks4kemSQoBAAIDdzBsVYjcOAdulE3ZeRcnn0fqEGjydBJqwCb++mjnoPAGp9UXGSxcUSGMyUw9SvF/WNruCJuh/UTj29mKAAAAAAbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpy+KIwZmU8DLmYglP3bPzrlpDaKkGu6VIJJwTOYQmRfUBAgIAAUMAAHliGrHMD2/tnxlfFt004e78Gx01J8/pMuF7TJD14g6yAQ8o+2LHwHas60HhK0I2UCPRN1mzPCOeLzEIW4SoYdJ9"
    );
  });
  test("with freeze authority and 9 decimals", () => {
    const tx = initializeMintBuilder({
      mint: mintKeypair,
      decimals: 9,
      mintAuthority,
      freezeAuthority,
    }).toTransaction();

    tx.recentBlockhash = "Eit7RCyhUixAe2hGBS8oqnw59QK3kgMMjfLME5bm9wRn";
    tx.sign(mintKeypair);

    const serializedTx = tx.serialize().toString("base64");

    expect(serializedTx).toBe(
      "ATZzZcv9ZRHTIoqeRP79u4kX9HdkluOCICsV001wKCNAZhAIKc6jqXNDJVTxoLIVRq5Dltt/bdfW1H7DJ94rOAMBAAIDdzBsVYjcOAdulE3ZeRcnn0fqEGjydBJqwCb++mjnoPAGp9UXGSxcUSGMyUw9SvF/WNruCJuh/UTj29mKAAAAAAbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpy+KIwZmU8DLmYglP3bPzrlpDaKkGu6VIJJwTOYQmRfUBAgIAAUMACXliGrHMD2/tnxlfFt004e78Gx01J8/pMuF7TJD14g6yAQ8o+2LHwHas60HhK0I2UCPRN1mzPCOeLzEIW4SoYdJ9"
    );
  });
});
